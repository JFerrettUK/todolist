export default function makeInboxPage() {
    const inboxMainHeader = document.getElementById('page-main');
    
    const inboxTitleHead = document.createElement('div');
    inboxTitleHead.setAttribute("id", "titleHead");

    const inboxTitleText = document.createElement('span');
    inboxTitleText.setAttribute("id", "titleText");
    inboxTitleText.setAttribute("class", "titleText");
    inboxTitleText.textContent = "Inbox";

    inboxMainHeader.appendChild(inboxTitleHead);
    inboxTitleHead.appendChild(inboxTitleText);
}