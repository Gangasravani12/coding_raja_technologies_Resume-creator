const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");

let isHidden = true;

function hide() {
    if (isHidden) {
        main.style.display = "none";
        isHidden = false;

        outputContainer.style.display = "block";
        outputContainer.innerHTML = `
            <div class="output">
                <div class="heading">
                    <h1>${inputField["name"].value || 'Your Name'}</h1>
                    <h4>${inputField["title"].value || 'Title/Sub Heading'}</h4>
                </div>
                <div class="info">
                    <div class="left">
                        <div class="box">
                            <h2>Objective</h2>
                            <p>${inputField["objective"].value.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="box">
                            <h2>Skills</h2>
                            <p>${inputField["skills"].value.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="box">
                            <h2>Academic Details</h2>
                            <p>${inputField["academic_details"].value.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="box">
                            <h2>Contact</h2>
                            <p>${inputField["contact"].value.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box">
                            <h2>Work Experience</h2>
                            <p>${inputField["work_experience"].value.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="box">
                            <h2>Achievements</h2>
                            <p>${inputField["achievements"].value.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="box">
                            <h2>Projects</h2>
                            <p>${inputField["projects"].value.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onclick="print()">Print Resume</button>
        `;
    } else {
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}

function clearDefault(element) {
    if (element.value === element.defaultValue) {
        element.value = '';
    }
}

window.onload = function () {
    clearDefaultsOnLoad();
};

function clearDefaultsOnLoad() {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
        clearDefault(textarea);
    });
}
