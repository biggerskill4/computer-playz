const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");

  question.addEventListener("click", () => {
    const isOpen = faq.classList.contains("open");

    // Close all other answers
    faqs.forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".answer").style.height = "0";
      item.querySelector(".answer").style.padding = "0 20px";
    });

    // Toggle this one
    if (!isOpen) {
      faq.classList.add("open");
      answer.style.height =  "80px";
      answer.style.padding = "20px";
    }
  });
});
