import { shallow } from "enzyme";
import GiftExpertApp from "../GiftExpertApp";

describe("pruebas <GifExpertApp/>", () => {
  test("debe ejecutar correctamente", () => {
    const wrapper = shallow(<GiftExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar la lista categorias", () => {
    const categories = ["loki", "dragon ball"];
    const wrapper = shallow(<GiftExpertApp categoris={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
