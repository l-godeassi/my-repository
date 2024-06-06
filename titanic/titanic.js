async function populate(){

    const requestURL = "https://l-godeassi.github.io/my-repository/hero/titanic.json";

    const request = new Request(requestURL);

    const response = await fetch(request);

    const peopleText = await response.text();

    const people = JSON.parse(peopleText);

    populateCard(people);

}

function populateCard(obj){

    const section = document.querySelector('section');
    const container = document.createElement('div');

    container.className = 'cards';

    obj.forEach(passenger => {

        const mainDiv = document.createElement('div');
        mainDiv.className = 'card';
        
        const subDiv = document.createElement('div');
        subDiv.className = 'content';


        const Pname = document.createElement('p');
        const Pclass = document.createElement('p');
        const Page = document.createElement('p');
        const Psex = document.createElement('p');
        const Psurv = document.createElement('p');
        const Pembark = document.createElement('p');

        Pname.textContent = `Nome: ${passenger.Name}`;
        Pclass.textContent = `Classe: ${passenger.Pclass}`;
        Page.textContent = `Età: ${passenger.Age}`;
        Psex.textContent = `Sesso: ${passenger.Sex}`;
        Psurv.textContent = `Sopravissuto: ${passenger.Survived ? 'Si' : 'No'}`;
        Pembark.textContent = `Inbarco: ${passenger.Embarked}`
        

        subDiv.appendChild(Pname);
        subDiv.appendChild(Pclass);
        subDiv.appendChild(Page);
        subDiv.appendChild(Psex);
        subDiv.appendChild(Psurv);
        subDiv.appendChild(Pembark);
        
        mainDiv.appendChild(subDiv);
        container.appendChild(mainDiv);
        section.appendChild(container);
    });

}

populate();