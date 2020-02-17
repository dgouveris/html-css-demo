$(function () {
  let list = $("#menu ul");

  // Create links
  let links = [
    { text: "About", url: "about.html" },
    { text: "Our Tours", url: "our-tours.html" },
    { text: "Gallery", url: "gallery.html" },
    { text: "Blog", url: "blog.html" },
    { text: "Contact Us", url: "contact-us.html" }
  ];
  links.forEach(appendLink);

  function appendLink(link) {
    // <li>
    //   <a href="">About</a>
    // </li>

    let listItem = $("<li>");
    let anchor = $("<a>");

    anchor.text(link.text);
    anchor.attr("href", link.url);

    listItem.append(anchor);
    list.append(listItem);
  }

  // Append spacing
  let grow = $('<li class="grow-1">');
  list.append(grow);

  // Create social links
  let social = [
    { cls: "fa-facebook", url: "facebook.html" },
    { cls: "fa-twitter", url: "twitter.html" },
    { cls: "fa-google-plus", url: "google-plus.html" },
    { cls: "fa-instagram", url: "instagram.html" }
  ];
  social.forEach(appendSocial);

  function appendSocial(social) {
    let html =
      `<li>
    <a href="${social.url}">
      <i class="fa ${social.cls}" aria-hidden="true"></i>
    </a>
  </li>`;

    list.append($(html));

    // let li = $("<li>");
    // let a = $("<a>");
    // let i = $("<i>");

    // a.attr("href", social.url);
    // i.attr("aria-hidden", "true");
    // i.addClass("fa");
    // i.addClass(social.cls);

    // a.append(i);
    // li.append(a);
    // list.append(li);
  }
})