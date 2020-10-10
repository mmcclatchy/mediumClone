import { handleErrors } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const followBtns = document.querySelectorAll(".follow");
  if (followBtns) {
    followBtns.forEach(btn => {
      btn.addEventListener("click", () => isFollowing(btn, followBtns));
    })
  }
});

const postFollow = async (val) => {
  const followedId = val;
  const followerId = localStorage.getItem("MEDIUM_CLONE_CURRENT_USER_ID");
  const body = { followerId, followedId };
  try {
    const res = await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 401) {
      return;
    }
  } catch (err) {
    handleErrors(err);
  }
};

const isFollowing = (element, btns) => {
  if (element.innerHTML === "Follow") {
    btns.forEach(btn => {
      btn.innerHTML = "Following";
    })
    postFollow(element.value);
  } else {
    btns.forEach(btn => {
      btn.innerHTML = "Follow";
    })
    destroyFollow(element.value);
  }
};

const destroyFollow = async (val) => {
  const followedId = val;
  const followerId = localStorage.getItem("MEDIUM_CLONE_CURRENT_USER_ID");
  const body = { followerId, followedId };
  try {
    const res = await fetch("/api/follow", {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 401) {
      return;
    }
  } catch (err) {
    handleErrors(err);
  }
};
