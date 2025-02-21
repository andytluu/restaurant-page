import coffeeImg from "./coffee.jpg";

function home(){
    function createTag(tag){
        return document.createElement(tag);
    }

    const content = document.querySelector("#content");

    const homePage = createTag("div");
    homePage.setAttribute("id","home-page");
    const img = createTag("img");
    img.src = coffeeImg;
    homePage.append(img);

    const title = createTag("h1");
    title.textContent = "Welcome to Cafe Luu";
    homePage.append(title);

    const message = createTag("p");
    message.textContent = "Luu is known for it's coffee that is paired\nwith it's world renowed customer service";
    homePage.append(message);

    const hourSection = createTag("div");
    const sun = "Sunday: 8am - 8pm";
    const mon = "Monday: 10am - 8pm";
    const tue = "Tuesday: 10am - 8pm";
    const wed = "Wednesday: 10am - 8pm";
    const thurs = "Thursday: 9am - 6pm";
    const fri = "Friday: Closed";
    const sat = "Saturday: Closed";
    const hours = [sun,mon,tue,wed,thurs,fri,sat];
    for(let i = 0;i<hours.length;i++){
        const day = createTag("p");
        day.textContent = hours[i];
        hourSection.append(day);
    }
    //hourSection.append(sun,mon,tue,wed,thurs,fri,sat);
    homePage.append(hourSection);

    const location = createTag("p");
    location.textContent = "1234 Mcdonald Drive, Ron, CA";
    homePage.append(location);

    content.append(homePage);
}

export default home;