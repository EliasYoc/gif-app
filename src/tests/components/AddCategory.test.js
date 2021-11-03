import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";
import "@testing-library/jest-dom";
describe("pruebas a componentte <AddCategory/>", () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategory} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategory} />);
  });
  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe cambiar la caja de texto con evento change", () => {
    const input = wrapper.find("input");
    const value = "hola a todos";
    //simular el change, y simulando evento e
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });
  test("No debe postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategory).not.toHaveBeenCalled();
  });
  test("debe llamar el setCategory y limpiar caja de texto", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "hola" } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategory).toHaveBeenCalled();
    expect(setCategory).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
