import "./App.scss";
import { categories } from "./data";
import { useEffect, useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth);
  // const [sliceCategories, setSliceCategories] = useState(6);
  // const [categoriesToShow, setCategoriesToShow] = useState([]);

  // useEffect(() => {
  //   const handleResize = event => setWidth(event.target.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(()=>{
  //   if(width<961 && width>601 && !isOpen){
  //     setSliceCategories(4);
  //     setCategoriesToShow(categories.slice(0, sliceCategories))
  //   } else if (!isOpen) {
  //     setSliceCategories(6);
  //     setCategoriesToShow(categories.slice(0, sliceCategories))
  //   } else {
  //     setCategoriesToShow(categories)
  //   }
  // }, [width, isOpen])

  const handleOnClick = () => setIsOpen(!isOpen);

  const categoriesToShow = isOpen ? categories : categories.slice(0, 6);

  useEffect(() => {
    // Если раздел открыт, добавляем класс "open_section" для плавного появления элементов
    if (isOpen) {
      const links = document.querySelectorAll(".link");
      links.forEach((link) => {
        link.classList.add("open_section");
      });
    }
  }, [isOpen]);

  return (
    <section className="home_section">
      <div className="content">
        <h2>Join 2 million+ Australians finding better</h2>
        <p>
          Finder's team of 40+ experts will help you find the right choices in
          over 100 categories.
        </p>

        <div className='categories_section'>
          {categoriesToShow.map((category, index) => {
            return (
              <a key={index} href={category.link} className={`link ${isOpen?'open_section':'close_section'}`}>
                {category.icon}
                {category.name}
              </a>
            );
          })}
        </div>
        <div className="open_button">
          <button onClick={handleOnClick}>
            <div>Show {isOpen ? "less" : "more"} categories</div>
            {isOpen ? (
              <KeyboardArrowUpOutlinedIcon className="arrowIcon" />
            ) : (
              <KeyboardArrowDownOutlinedIcon className="arrowIcon" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
