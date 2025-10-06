//your code here!

const infiList = document.getElementById("infi-list");

function addListItems(count) {
  const currentCount = infiList.children.length;
  for (let i = 1; i <= count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${currentCount + i}`;
    infiList.appendChild(li);
  }
}

addListItems(10);


infiList.addEventListener("scroll", () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    addListItems(2); 
  }
});
