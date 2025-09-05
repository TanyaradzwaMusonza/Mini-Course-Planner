document.addEventListener("DOMContentLoaded", () => {
  let isLecturer = false;
  const toggleModeBtn = document.getElementById("toggleMode");
  const createBtn = document.getElementById("openBtn");
  const yourCoursesContainer = document.getElementById("yourCoursesContainer");
  const planCounter = document.querySelector(".card:nth-child(1) h2");
  const lessonsCounter = document.querySelector(".card:nth-child(2) h2");
  const completedCounter = document.querySelector(".card:nth-child(3) h2");

  const searchInput = document.querySelector('input[type="search"]');
  const categoryFilter = document.getElementById("categoryFilter");
  const levelFilter = document.getElementById("levelFilter");
  const favoritesOnlyFilter = document.getElementById("favoritesOnly");
  const completedOnlyFilter = document.getElementById("completedOnly"); // ✅ new

  const openCardBtn = document.getElementById("openBtn");
  const createCard = document.getElementById("create-card");
  const closeBtn = document.getElementById("closeBtn");
  const createForm = createCard.querySelector("form");
  const courseTitleInput = document.getElementById("courseTitle");
  const categorySelect = document.getElementById("category");
  const levelSelect = document.getElementById("level");
  const durationInput = document.getElementById("duration");
  const descriptionInput = document.getElementById("description");
  const addLessonBtn = document.getElementById("addLessonBtn");
  const lessonsDropdown = document.getElementById("lessonsDropdown");
  const lessonsContainer = document.getElementById("lessonsContainer");
  const saveLessonBtn = document.getElementById("saveLessonBtn");

  lessonsDropdown.style.display = "none";

  let localCourses = JSON.parse(localStorage.getItem("courses") || "[]");
  let allCourses = [...coursesData];
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  let plan = JSON.parse(localStorage.getItem("plan") || "[]");
  let lessonProgress = JSON.parse(localStorage.getItem("lessonProgress") || "{}");
  let editingCard = null;

  const toggleBtn = document.getElementById("toggle-btn");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

// Helper to detect mobile
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Declare secretBtn globally
let secretBtn;

// Function to create the mobile secret button
function createSecretButton() {
  if (!secretBtn) {
    secretBtn = document.createElement("button");
    secretBtn.id = "secretBtn";
    secretBtn.style.cssText = `
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #3b82f6;
      opacity: 0.1;
      border: none;
      z-index: 10000;
      cursor: pointer;
      color: #fff;
      
      font-weight: bold;
      font-size: 16px;
      text-align: center;
      
      -webkit-tap-highlight-color: transparent;
      display: block;
    `;
    secretBtn.textContent = "Tap";
    document.body.appendChild(secretBtn);

    // Double-tap detection
    let lastTapTime = 0;
    secretBtn.addEventListener("touchend", () => {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTapTime;
      if (tapLength < 300 && tapLength > 0) {
        enableLecturerMode();
      }
      lastTapTime = currentTime;
    });
  }
}

// Show/hide secret button based on screen size
function updateSecretButtonVisibility() {
  if (isMobile()) {
    if (!secretBtn) createSecretButton();
    secretBtn.style.display = "block";
  } else if (secretBtn) {
    secretBtn.style.display = "none";
  }
}

// Call on load and on resize
window.addEventListener("load", updateSecretButtonVisibility);
window.addEventListener("resize", updateSecretButtonVisibility);

// Single enableLecturerMode function
function enableLecturerMode() {
  if (!isLecturer) {
    isLecturer = true;
    createBtn.style.display = "inline-block";
    toggleModeBtn.style.display = "inline-block";
    filterCourses();
    updateStats();
    alert("Lecturer Mode Activated!");
    // Hide the mobile button after unlocking
    if (secretBtn && isMobile()) {
      secretBtn.style.display = "none";
    }
  }
}



  let typedKeys = [];
  const secretCode = "LECTURE"; // type this anywhere to enable lecturer mode
  document.addEventListener("keydown", (e) => {
    const activeEl = document.activeElement;
    if (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.isContentEditable) {
      return;
    }
    typedKeys.push(e.key.toUpperCase());
    typedKeys = typedKeys.slice(-secretCode.length);

    if (typedKeys.join("") === secretCode) {
      enableLecturerMode();
      typedKeys = [];
    }
  });
 
  // Filter courses
  function filterCourses() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedLevel = levelFilter.value;
    const showFavoritesOnly = favoritesOnlyFilter.checked;
    const showCompletedOnly = completedOnlyFilter.checked; // ✅ new

    const coursesToFilter = isLecturer 
  ? localCourses 
  : [...allCourses, ...localCourses];


    const filteredCourses = coursesToFilter.filter((course) => {
      const matchesSearch =
        !searchTerm ||
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.category.toLowerCase().includes(searchTerm);
      const matchesCategory =
        !selectedCategory || course.category === selectedCategory;
      const matchesLevel = !selectedLevel || course.level === selectedLevel;
      const matchesFavorites =
        !showFavoritesOnly || favorites.includes(course.id);

      const completedLessons = course.lessons.filter(
        (_, idx) => lessonProgress[course.id]?.[idx]
      ).length;
      const progressPercent = course.lessons.length
        ? Math.round((completedLessons / course.lessons.length) * 100)
        : 0;

      const matchesCompleted = !showCompletedOnly || progressPercent === 100; // ✅ new

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel &&
        matchesFavorites &&
        matchesCompleted
      );
    });

    renderCourses(filteredCourses);
  }

  searchInput.addEventListener("input", filterCourses);
  categoryFilter.addEventListener("change", filterCourses);
  levelFilter.addEventListener("change", filterCourses);
  favoritesOnlyFilter.addEventListener("change", filterCourses);
  completedOnlyFilter.addEventListener("change", filterCourses); // ✅ new

  toggleModeBtn.addEventListener("click", () => {
    if (!isLecturer) return;
    isLecturer = !isLecturer;
    toggleModeBtn.textContent = `Lecturer Mode: ${isLecturer ? "ON" : "OFF"}`;
    createBtn.style.display = isLecturer ? "inline-block" : "none";
    toggleModeBtn.style.display = isLecturer ? "inline-block" : "none";

     if (!isLecturer && secretBtn && isMobile()) {
    secretBtn.style.display = "block";
  }
    filterCourses();
    updateStats();
  });

  if (!isLecturer) toggleModeBtn.style.display = "none";

  function togglePlan(courseId) {
    const index = plan.indexOf(courseId);
    if (index > -1) plan.splice(index, 1);
    else plan.push(courseId);
    localStorage.setItem("plan", JSON.stringify(plan));
    updateStats();
    filterCourses();
  }

  function toggleFavorite(courseId) {
    const index = favorites.indexOf(courseId);
    if (index > -1) favorites.splice(index, 1);
    else favorites.push(courseId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateStats();
    filterCourses();
  }

  function toggleLessonsView(courseId) {
    const lessonsDiv = document.getElementById(`lessons-${courseId}`);
    const sidebar = document.getElementById("sidebar");
    if (!lessonsDiv) return;
    lessonsDiv.style.display =
      lessonsDiv.style.display === "block" ? "none" : "block";
    if (window.innerWidth <= 768) {
      if (lessonsDiv.style.display === "block") sidebar.classList.add("sidebar-visible");
      else sidebar.classList.remove("sidebar-visible");
    }
  }

  function toggleLessonProgress(courseId, lessonIndex) {
    if (!lessonProgress[courseId]) lessonProgress[courseId] = {};
    lessonProgress[courseId][lessonIndex] = !lessonProgress[courseId][lessonIndex];
    localStorage.setItem("lessonProgress", JSON.stringify(lessonProgress));

    const courseCard = document
      .getElementById(`lessons-${courseId}`)
      ?.closest(".longcard");
    if (courseCard) {
      const course =
        allCourses.find((c) => c.id === courseId) ||
        localCourses.find((c) => c.id === courseId);
      const completedLessons = course.lessons.filter(
        (_, idx) => lessonProgress[courseId]?.[idx]
      ).length;
      const progressPercent = course.lessons.length
        ? Math.round((completedLessons / course.lessons.length) * 100)
        : 0;

      const progressBar = courseCard.querySelector(".progress__bar");
      const progressLabel = courseCard.querySelector(".progress__label");

      if (progressBar) progressBar.style.width = progressPercent + "%";
      if (progressLabel) progressLabel.textContent = `${progressPercent}% Complete`;
    }

    updateStats();
  }

  function editCourse(courseId) {
    const course = localCourses.find((c) => c.id === courseId);
    if (!course) return;
    editingCard = course;

    courseTitleInput.value = course.title;
    categorySelect.value = course.category;
    levelSelect.value = course.level;
    durationInput.value = course.duration;
    descriptionInput.value = course.description;

    lessonsContainer.innerHTML = "";
    course.lessons.forEach((lesson) => {
      const lessonItem = document.createElement("div");
      lessonItem.className = "lesson-item";
      lessonItem.style.display = "flex";
      lessonItem.style.justifyContent = "space-between";
      lessonItem.style.alignItems = "center";
      lessonItem.style.marginBottom = "5px";
      lessonItem.innerHTML = `<span>${lesson.title} (${lesson.duration} min)</span> <button type="button" class="delete-lesson">×</button>`;
      lessonItem.querySelector(".delete-lesson").addEventListener("click", () => lessonItem.remove());
      lessonsContainer.appendChild(lessonItem);
    });

    createCard.style.display = "flex";
  }

  function deleteCourse(courseId) {
    if (!confirm("Are you sure you want to delete this course?")) return;

    localCourses = localCourses.filter((c) => c.id !== courseId);
    favorites = favorites.filter((id) => id !== courseId);
    plan = plan.filter((id) => id !== courseId);
    if (lessonProgress[courseId]) delete lessonProgress[courseId];

    localStorage.setItem("courses", JSON.stringify(localCourses));
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("plan", JSON.stringify(plan));
    localStorage.setItem("lessonProgress", JSON.stringify(lessonProgress));

    filterCourses();
    updateStats();
  }

  openCardBtn.addEventListener("click", () => {
    createCard.style.display = "flex";
    createCard.scrollTop = 0;
  });

  const closeModalCard = () => {
    createCard.style.display = "none";
    createForm.reset();
    lessonsContainer.innerHTML = "";
    lessonsDropdown.style.display = "none";
    editingCard = null;
  };
  closeBtn.addEventListener("click", closeModalCard);
  window.addEventListener("click", (e) => {
    if (e.target === createCard) closeModalCard();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModalCard();
  });

  addLessonBtn.addEventListener("click", () => {
    lessonsDropdown.style.display = lessonsDropdown.style.display === "none" ? "flex" : "none";
  });

  saveLessonBtn.addEventListener("click", () => {
    const title = document.getElementById("lessonTitle").value.trim();
    const duration = document.getElementById("lessonDuration").value.trim();
    if (!title) return;

    const lessonItem = document.createElement("div");
    lessonItem.className = "lesson-item";
    lessonItem.style.display = "flex";
    lessonItem.style.justifyContent = "space-between";
    lessonItem.style.alignItems = "center";
    lessonItem.style.marginBottom = "5px";
    lessonItem.innerHTML = `<span>${title} (${duration} min)</span> <button type="button" class="delete-lesson">×</button>`;
    lessonItem.querySelector(".delete-lesson").addEventListener("click", () => lessonItem.remove());
    lessonsContainer.appendChild(lessonItem);

    document.getElementById("lessonTitle").value = "";
    document.getElementById("lessonDuration").value = "";
    lessonsDropdown.style.display = "none";
  });

  createForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = courseTitleInput.value.trim() || "Untitled Course";
    const category = categorySelect.value || "General";
    const level = levelSelect.value || "Beginner";
    const duration = parseInt(durationInput.value) || 0;
    const description = descriptionInput.value.trim() || "No description provided";

    const lessons = Array.from(lessonsContainer.children).map((item) => {
      const text = item.querySelector("span").textContent;
      const match = text.match(/^(.+) \((\d+) min\)$/);
      return {
        title: match ? match[1] : text,
        duration: match ? parseInt(match[2]) : 0,
      };
    });

    const courseData = {
      id: editingCard ? editingCard.id : Date.now().toString(),
      title,
      category,
      level,
      duration,
      description,
      lessons,
      createdAt: editingCard ? editingCard.createdAt : new Date().toISOString(),
    };

    if (editingCard) {
      const index = localCourses.findIndex((c) => c.id === editingCard.id);
      if (index !== -1) localCourses[index] = courseData;
    } else {
      localCourses.push(courseData);
    }

    localStorage.setItem("courses", JSON.stringify(localCourses));
    closeModalCard();
    filterCourses();
    updateStats();
  });

  function renderCourses(coursesToRender) {
  yourCoursesContainer.innerHTML = "";
  
  if (!coursesToRender || coursesToRender.length === 0) {
    yourCoursesContainer.innerHTML = `
      <div class="empty-state">
        <h3>No courses found</h3>
      </div>
    `;
    return;
  }

  coursesToRender.forEach((course) => {
    const isFavorite = favorites.includes(course.id);
    const isInPlan = plan.includes(course.id);
    const completedLessons = course.lessons.filter(
      (_, idx) => lessonProgress[course.id] && lessonProgress[course.id][idx]
    ).length;
    const progressPercent = course.lessons.length
      ? Math.round((completedLessons / course.lessons.length) * 100)
      : 0;

    const courseCard = document.createElement("div");
    courseCard.className = "longcard";
    courseCard.innerHTML = `
      <div class="longcard-header">
          <h3>${course.title}</h3>
          <div style="display:flex;gap:10px;align-items:center;">
              <span class="course-category">${course.category}</span>
              <button class="favorite-btn">${isFavorite ? "❤️" : "🤍"}</button>
          </div>
      </div>
      <div class="course-meta">
          Level: ${course.level} • Duration: ${course.duration} min
          ${
            !isLecturer
              ? `• Progress: ${completedLessons}/${course.lessons.length} lessons`
              : ""
          }
      </div>
      <p style="color:#666;margin-bottom:10px;">${course.description}</p>
      ${
        !isLecturer
          ? `<div class="progress"><div class="progress__bar" style="width:${progressPercent}%;height:100%;"></div></div>
            <span class="progress__label">${progressPercent}% Complete</span>`
          : ""
      }
      <div style="margin-top:15px;">
          ${
            isLecturer
              ? `
              <span style="background:#128a3a;color:#fff;padding:5px 10px;border-radius:15px;">Added to Plan: ${isInPlan ? 1 : 0}</span>
              <span style="background:#3b82f6;color:#fff;padding:5px 10px;border-radius:15px;">Completed: ${completedLessons === course.lessons.length ? 1 : 0}</span>
              <div style="display:flex;gap:10px;margin-top:15px;">
                  <button class="edit-btn" style="flex:1;background:#f59e0b;color:#fff;padding:8px;border:none;border-radius:5px;">Edit</button>
                  <button class="delete-btn" style="flex:1;background:#ef4444;color:#fff;padding:8px;border:none;border-radius:5px;">Delete</button>
              </div>
          `
              : `
              <div style="display:flex;gap:10px;">
                  <button class="plan-btn" style="flex:1;background:${isInPlan ? "#ef4444" : "#128a3a"};color:#fff;padding:8px;border:none;border-radius:5px;">${isInPlan ? "Remove from Plan" : "Add to Plan"}</button>
                  ${course.lessons.length ? `<button class="view-lessons-btn" style="flex:1;background:#3b82f6;color:#fff;padding:8px;border:none;border-radius:5px;">View Lessons</button>` : ""}
              </div>
              <div id="lessons-${course.id}" class="lessons-dropdown" style="display:none;margin-top:10px;">
                  ${course.lessons
                    .map(
                      (lesson, idx) => `
                      <div style="display:flex;align-items:center;gap:10px;margin-bottom:5px;">
                          <input type="checkbox" data-idx="${idx}" ${lessonProgress[course.id]?.[idx] ? "checked" : ""}>
                          <span>${lesson.title} (${lesson.duration} min)</span>
                      </div>`
                    )
                    .join("")}

                  ${
                    course.courseLink
                      ? `<div style="margin-top:10px;">
                          <a href="${course.courseLink}" target="_blank" style="color:#128a3a;font-weight:bold;">
                            Watch Full Course on YouTube
                          </a>
                        </div>`
                      : ""
                  }
              </div>
          `
          }
      </div>
    `;

    // Favorite button
    courseCard.querySelector(".favorite-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(course.id);
    });

    if (isLecturer) {
      const editBtn = courseCard.querySelector(".edit-btn");
      const deleteBtn = courseCard.querySelector(".delete-btn");
      if (editBtn) editBtn.addEventListener("click", (e) => { e.stopPropagation(); editCourse(course.id); });
      if (deleteBtn) deleteBtn.addEventListener("click", (e) => { e.stopPropagation(); deleteCourse(course.id); });
    } else {
      const planBtn = courseCard.querySelector(".plan-btn");
      if (planBtn) planBtn.addEventListener("click", (e) => { e.stopPropagation(); togglePlan(course.id); });
      const viewLessonsBtn = courseCard.querySelector(".view-lessons-btn");
      if (viewLessonsBtn) viewLessonsBtn.addEventListener("click", (e) => { e.stopPropagation(); toggleLessonsView(course.id); });

      // Lesson progress checkboxes
      courseCard.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
        cb.addEventListener("click", (e) => e.stopPropagation());
        cb.addEventListener("change", (e) => {
          e.stopPropagation();
          const idx = parseInt(cb.getAttribute("data-idx"));
          toggleLessonProgress(course.id, idx);
        });
      });
    }

    yourCoursesContainer.appendChild(courseCard);
  });
}

  function updateStats() {
    const statsCards = document.querySelectorAll(".card");
    if (isLecturer) {
      statsCards.forEach(card => (card.style.display = "none"));
      return;
    } else {
      statsCards.forEach(card => (card.style.display = "block"));
    }

    const totalCourses = plan.length;
    let totalLessons = 0;
    let completedLessonsCount = 0;
    let completedCourses = 0;

    allCourses.forEach((course) => {
      const lessons = course.lessons.length;
      totalLessons += lessons;
      const completed = Object.values(lessonProgress[course.id] || {}).filter(Boolean).length;
      completedLessonsCount += completed;
      if (completed === lessons && lessons > 0) completedCourses += 1;
    });

    planCounter.textContent = totalCourses;
    lessonsCounter.textContent = totalLessons ? Math.round((completedLessonsCount / totalLessons) * 100) + "%" : "0%";
    completedCounter.textContent = completedCourses;
  }

  function init() {
    createBtn.style.display = isLecturer ? "inline-block" : "none";
    filterCourses();
    updateStats();
  }

  init();
});

// Sidebar toggle and splash
const sidebarToggle = document.getElementById("sidebarToggle");
function handleResize() {
  if (window.innerWidth > 768) sidebarToggle.checked = false;
}
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => { splash.style.display = "none"; }, 1000);
  }, 2500);
});

