const articles = {
  welfare: {
    title: "Why Player Welfare Matters Beyond the Pitch",
    summary: "Exploring why the welfare and professional interests of footballers matter throughout their careers.",
    paragraphs: [
      "Football is more than what happens during a match. Players also have professional, educational, social, and personal interests that deserve attention throughout their careers.",
      "The ULF Constitution identifies the protection of footballers' rights and welfare as key organizational objectives. It also outlines social, medical, educational, pension, and emergency assistance as areas of intended support for members.",
      "Turning these objectives into effective support requires responsible planning, cooperation, and transparent governance. The specific programs available to members should be confirmed by ULF before being announced publicly."
    ]
  },

  unity: {
    title: "The Role of Unity in Liberian Football",
    summary: "A proposed editorial on collaboration and the shared interests of people involved in Liberian football.",
    paragraphs: [
      "Football brings together players, coaches, administrators, supporters, and communities. Cooperation among these groups can help strengthen the wider football environment.",
      "The ULF Constitution emphasizes unity, dignity, welfare, and the promotion of Liberian football. It also establishes governance structures intended to support member representation and local engagement.",
      "Building trust requires clear communication, accountability, and meaningful participation. These principles provide a foundation for working toward the shared interests of Liberian footballers."
    ]
  },

  career: {
    title: "Preparing for Life Beyond Playing",
    summary: "Why professional growth and career transition deserve attention throughout a footballer's journey.",
    paragraphs: [
      "A football career is one part of a person's life. Education, professional skills, and preparation for future opportunities can matter during and after a playing career.",
      "The ULF Constitution includes training, professional growth, and career transition among its stated objectives for members.",
      "Practical initiatives should be developed with members' needs in mind. Any courses, partnerships, or career services should only be presented as available after ULF confirms they are established."
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const article = articles[params.get("id")];

const title = document.getElementById("article-title");
const summary = document.getElementById("article-summary");
const content = document.getElementById("article-content");

if (article && title && summary && content) {
  document.title = `${article.title} | ULF`;
  title.textContent = article.title;
  summary.textContent = article.summary;

  content.replaceChildren();

  article.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    content.appendChild(p);
  });
} else if (title && summary && content) {
  document.title = "Article Not Found | ULF";
  title.textContent = "Article Not Found";
  summary.textContent = "This article may not exist or the link may be incorrect.";
  content.replaceChildren();

  const link = document.createElement("a");
  link.href = "news.html";
  link.className = "text-link";
  link.textContent = "Return to News";
  content.appendChild(link);
}
