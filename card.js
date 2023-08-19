let bodyobj = {

    container:{
        eletype : "div",
        eleclsname : "container",
        container1:{
            eletype : "div",
            eleclsname : "container1",
            image:{
                src:"profileimage.jpg",
                eletype : "img",
                eleclsname : "image"
            },
            text:{
                eletype : "div",
                eleclsname : "textdiv",
                name:{ 
                    eletype : "div",
                    eleclsname : "name",
                    textcontent1 : "Ruben Tillman"
                },
                label:{
                    eletype : "label",
                    eleclsname : "description",
                    textcontent2 : "Etiam sit amet orci eget"
                }
            },
            button:{
                eletype : "button",
                eleclsname : "button",
                textcontent3 : "View Profile"
            }

        },
   
        container2:{
            eletype : "div",
            eleclsname : "container2",
            content:{
                eletype:"div",
                eleclsname:"content",
                number:{
                    eletype : "label",
                    eleclsname : "number",
                    textcontent4 : "12"
                },
                para:{
                    eletype : "label",
                    eleclsname : "para",
                    textcontent5 : "new leads,"
                },
                amount:{
                    eletype : "label",
                    eleclsname : "amount",
                    textcontent6 : "$56.24"
                },
                parag:{
                    eletype : "label",
                    eleclsname : "parag",
                    textcontent7 : "in sales"
                }
            }
            
        },
        container3:{
            eletype:"div",
            eleclsname:"container3",
            topleft:{
                eletype:"div",
                eleclsname:"topleft",
                automation:{
                    eletype:"button",
                    eleclsname:"automation",
                    textcontent8:"Automation"

                    // iconElement:{
                    //     eletype:"i",
                    //     eleclsname:"fa-solid fa-bus",
                    // },
                }

            },
            topright:{
                eletype:"div",
                eleclsname:"topright",
                report:{
                    eletype:"button",
                    eleclsname:"report",
                    textcontent9:"report"
                }
            },
            botleft:{
                eletype:"div",
                eleclsname:"botleft",
                activity:{
                    eletype:"button",
                    eleclsname:"activity",
                    textcontent10:"activity"
                } 
           },
            botright:{
                eletype:"div",
                eleclsname:"botright",
                settings:{
                    eletype:"button",
                    eleclsname:"settings",
                    textcontent11:"settings"
                } 
           }

        }
    }
}
    
const container = document.createElement(bodyobj.container.eletype);
container.className = bodyobj.container.eleclsname;

const container1 = document.createElement(bodyobj.container.container1.eletype);
container1.className = bodyobj.container.container1.eleclsname;

const image = document.createElement(bodyobj.container.container1.image.eletype);
image.className = bodyobj.container.container1.image.eleclsname;
image.src = bodyobj.container.container1.image.src;
container1.appendChild(image);

const text = document.createElement(bodyobj.container.container1.text.eletype);
text.className = bodyobj.container.container1.text.eleclsname;

const name1 = document.createElement(bodyobj.container.container1.text.name.eletype);
name1.className = bodyobj.container.container1.text.name.eleclsname;
name1.textContent = bodyobj.container.container1.text.name.textcontent1;
text.appendChild(name1);


const label = document.createElement(bodyobj.container.container1.text.label.eletype);
label.classNname = bodyobj.container.container1.text.label.eleclsname;
label.textContent = bodyobj.container.container1.text.label.textcontent2;
text.appendChild(label);

container1.appendChild(text);

const button = document.createElement(bodyobj.container.container1.button.eletype)
button.className = bodyobj.container.container1.button.eletype;
button.textContent = bodyobj.container.container1.button.textcontent3;
container1.appendChild(button);

container.appendChild(container1);

const container2 = document.createElement(bodyobj.container.container2.eletype);
container2.className = bodyobj.container.container2.eleclsname;

const content = document.createElement(bodyobj.container.container2.content.eletype);
content.className = bodyobj.container.container2.content.eleclsname;

const number = document.createElement(bodyobj.container.container2.content.number.eletype);
number.className = bodyobj.container.container2.content.number.eleclsname;
number.textContent = bodyobj.container.container2.content.number.textcontent4;
content.appendChild(number);
 
const para = document.createElement(bodyobj.container.container2.content.para.eletype);
para.className = bodyobj.container.container2.content.para.eleclsname;
para.textContent = bodyobj.container.container2.content.para.textcontent5;
content.appendChild(para);

const amount = document.createElement(bodyobj.container.container2.content.amount.eletype);
amount.className = bodyobj.container.container2.content.amount.eleclsname;
amount.textContent = bodyobj.container.container2.content.amount.textcontent6;
content.appendChild(amount);
 
const parag = document.createElement(bodyobj.container.container2.content.parag.eletype);
parag.className = bodyobj.container.container2.content.parag.eleclsname;
parag.textContent = bodyobj.container.container2.content.parag.textcontent7;
content.appendChild(parag);

container2.appendChild(content);

container.appendChild(container2);

const container3 = document.createElement(bodyobj.container.container3.eletype);
container3.className = bodyobj.container.container3.eleclsname;

const topleft = document.createElement(bodyobj.container.container3.topleft.eletype);
topleft.className = bodyobj.container.container3.topleft.eleclsname;

const automation = document.createElement(bodyobj.container.container3.topleft.automation.eletype);
automation.className = bodyobj.container.container3.topleft.automation.eleclsname;
automation.textContent = bodyobj.container.container3.topleft.automation.textcontent8;

// const iconElement = document.createElement('i');
// iconElement.className = bodyobj.container.container3.topleft.automation.eleclsname;
// automation.appendChild(iconElement);

topleft.appendChild(automation);

container3.appendChild(topleft);

const topright = document.createElement(bodyobj.container.container3.topright.eletype);
topright.className = bodyobj.container.container3.topright.eleclsname;

const report = document.createElement(bodyobj.container.container3.topright.report.eletype);
report.className = bodyobj.container.container3.topright.report.eleclsname;
report.textContent = bodyobj.container.container3.topright.report.textcontent9;
topright.appendChild(report);

container3.appendChild(topright);

const botleft = document.createElement(bodyobj.container.container3.botleft.eletype);
botleft.className = bodyobj.container.container3.botleft.eleclsname;

const activity = document.createElement(bodyobj.container.container3.botleft.activity.eletype);
activity.className = bodyobj.container.container3.botleft.activity.eleclsname;
activity.textContent = bodyobj.container.container3.botleft.activity.textcontent10;
botleft.appendChild(activity);

container3.appendChild(botleft);

const botright = document.createElement(bodyobj.container.container3.botright.eletype);
botright.className = bodyobj.container.container3.botright.eleclsname;

const settings = document.createElement(bodyobj.container.container3.botright.settings.eletype);
settings.className = bodyobj.container.container3.botright.settings.eleclsname;
settings.textContent = bodyobj.container.container3.botright.settings.textcontent11;
botright.appendChild(settings);

container3.appendChild(botright);

container.appendChild(container3);



document.body.append(container);