function contact(){
    function createTag(tag){
        return document.createElement(tag);
    }

    const content = document.querySelector("#content");

    const contactSection = createTag("div");
    contactSection.setAttribute("id","contact-page");

    const contactTitle = createTag("p");
    contactTitle.textContent = "Contact Us";
    contactSection.append(contactTitle);

    const email = createTag("p");
    email.textContent = "Email: realEmail@gmail.com";
    contactSection.append(email);

    const phone = createTag("p");
    phone.textContent = "Phone number: 123-456-7890";
    contactSection.append(phone);

    content.append(contactSection);
}

export default contact;