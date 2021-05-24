const generateManager = function (managerInfo) {
    console.log(managerInfo);
    return `
    <div class="card">
<div class="card-content">
    <div class="media">
    <div class="media-left">
        <figure class="image is-48x48">
    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
    </div>
    <div class="media-content">
        <p class="title is-4">${managerInfo.managerName}</p>
        <p class="subtitle is-6">${managerInfo.managerRole}</p>
    </div>
    </div>

    <div class="content">
    Id: ${managerInfo.managerId}
    </div>
    <div class="content">
Email: ${managerInfo.managerEmail}
    </div>
<div class="content">
Office Number: ${managerInfo.managerOfficeNumber}
</div>
</div>
</div>
    `;
}
module.exports = generateManager;