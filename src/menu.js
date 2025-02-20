function menu(){
    function createTag(tag){
        return document.createElement(tag);
    }

    const content = document.querySelector("#content");

    const menuSection = createTag("div");
    menuSection.setAttribute("id","menu-page");

    const title = createTag("p");
    title.textContent = "Menu";
    menuSection.append(title);

    const drinkTitle = createTag("p");
    drinkTitle.textContent = "Beverages";
    menuSection.append(drinkTitle);

    const coffee = "Coffee $1";
    const greenTea = "Green tea $2";
    const blackTea = "Black tea $3";
    const drinks = [coffee,greenTea,blackTea];
    
    for(let i = 0;i<drinks.length;i++){
        const item = createTag("p");
        item.textContent = drinks[i];
        menuSection.append(item);
    }
    
    content.append(menuSection);
}

export default menu;