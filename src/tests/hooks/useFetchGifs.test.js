import { renderHook } from "@testing-library/react-hooks";
import useFetchGif from "../../hooks/useFetchGif";
// npm install --save-dev @testing-library/react-hooks
describe("Pruebas en hook useFetchGifs", () => {
  test("debe retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGif("onePunch"));
    const { data, loading } = result.current;
    expect(loading).toBe(true);
    expect(data).toEqual([]);
  });
});
