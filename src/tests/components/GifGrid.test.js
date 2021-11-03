import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import useFetchGif from "../../hooks/useFetchGif";
import "@testing-library/jest-dom";
jest.mock("../../hooks/useFetchGif");
describe("pruebas con <GifGrid/>", () => {
  const value = "goku";
  test("debe ejecutar el componente", () => {
    //simulando useFetch
    useFetchGif.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={value} />);

    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar items cuando se carga useFetch", () => {
    const gifs = [
      {
        id: "ABC",
        img: "https://localhost/cualquier.jpg",
        title: "lo que sea",
      },
      {
        id: "ABC",
        img: "https://localhost/cualquier.jpg",
        title: "lo que sea",
      },
    ];
    useFetchGif.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={value} />);
    expect(wrapper.find("h5").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
