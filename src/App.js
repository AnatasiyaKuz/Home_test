import "./App.scss";
import { categories } from "./data";
import { useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => setIsOpen(!isOpen);

  const categoriesToShow = isOpen ? categories : categories.slice(0, 6);

  return (
    <section className="home_section">
      <div className="content">
        <h2>Join 2 million+ Australians finding better</h2>
        <p>
          Finder's team of 40+ experts will help you find the right choices in
          over 100 categories.
        </p>

        <div className="categories_section">
          {categoriesToShow.map((category, index) => {
            return (
              <a
                key={index}
                href={category.link}
                className={`link ${isOpen ? "open_section" : "close_section"}`}
              >
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
