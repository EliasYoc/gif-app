import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas para <GifGridItem/>", () => {
  const url =
    "https://giphy.com/gifs/TOEIAnimationUK-goku-dragon-ball-super-clnwbP8SbJUvb0Nxty";
  const title = "titulo";
  const wrapper = shallow(<GifGridItem img={url} title={title} />);

  test("debe ejecutar <GifGridItem/> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe tener un parrafo con texto", () => {
    const h3 = wrapper.find("h3");
    expect(h3.text().trim()).toBe(title);
  });
  test("que la img tenga src y alt", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test("img debe tener la class animate__fadeInLeft", () => {
    const article = wrapper.find("article");
    const className = "animate__fadeInLeft";

    expect(article.prop("className").includes(className)).toBe(true);
  });
});
