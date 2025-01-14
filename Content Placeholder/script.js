document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('header');
    const title = document.getElementById('title');
    const excerpt = document.getElementById('excerpt');
    const profile_img = document.getElementById('profile_img');
    const name = document.getElementById('name');
    const date = document.getElementById('date');

    const animated_bgs = document.querySelectorAll('.animated-bg');
    const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

    setTimeout(getData, 2500);

    function getData() {
        header.innerHTML = '<img src="https://plus.unsplash.com/premium_photo-1681302427948-2fd0eca629b1?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>';
        title.innerHTML = 'Lorem ipsum dolor sit amet.';
        excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, debitis?';
        profile_img.innerHTML = '<img src="https://i.pinimg.com/736x/4c/ec/8c/4cec8c5f2ca5c747c5129608b0d3492b.jpg" alt="">';
        name.innerHTML = 'John Doe';
        date.innerHTML = 'Oct 08, 2020';

        animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
        animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
    }
});
  