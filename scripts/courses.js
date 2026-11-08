// Course array, filtering logic, and total credits dynamic reducer
const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce the basic concepts of program design and development.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web and to scripting languages such as HTML and CSS.',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students learn to write functions and handle parameters, return values, and exceptions.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces classes, objects, inheritance, and polymorphism.',
    technology: ['C#'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students learn to create dynamic websites using JavaScript, modern layouts, and API integrations.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Focuses on user-centric web applications with advanced JavaScript programming.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const courseContainer = document.getElementById("course-container");
  const totalCreditsEl = document.getElementById("total-credits");
  const btnAll = document.getElementById("btn-all");
  const btnCse = document.getElementById("btn-cse");
  const btnWdd = document.getElementById("btn-wdd");

  function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach(course => {
      const card = document.createElement("div");
      card.classList.add("course-card");
      if (course.completed) {
        card.classList.add("completed");
      }

      card.innerHTML = `<p><strong>${course.subject} ${course.number}</strong>: ${course.title}</p>`;
      courseContainer.appendChild(card);
    });

    calculateTotalCredits(courseList);
  }

  function calculateTotalCredits(courseList) {
    const total = courseList.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsEl.textContent = total;
  }

  function setActiveButton(activeBtn) {
    [btnAll, btnCse, btnWdd].forEach(btn => btn.classList.remove("active"));
    activeBtn.classList.add("active");
  }

  // Filter Event Listeners
  btnAll.addEventListener("click", () => {
    displayCourses(courses);
    setActiveButton(btnAll);
  });

  btnCse.addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
    setActiveButton(btnCse);
  });

  btnWdd.addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
    setActiveButton(btnWdd);
  });

  // Initial display
  displayCourses(courses);
});