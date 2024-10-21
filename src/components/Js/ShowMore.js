function ShowMore(e, moreTxt) {
    document.querySelector(e).classList.remove("line-clamp-2");
    if(document.querySelector(moreTxt).textContent=="بیشتر")
        document.querySelector(moreTxt).textContent ="کمتر";
    else
    {
        document.querySelector(e).classList.add("line-clamp-2");
        document.querySelector(moreTxt).textContent="بیشتر"
    }
  }