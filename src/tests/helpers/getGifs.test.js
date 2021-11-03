import { getGifs } from "../../helpers/getGifs";

describe("pruebas con funcion getGifs", () => {
  test("debe devolver una data [] de 10 elementos", async () => {
    const data = await getGifs("goku");
    expect(data.length).toBe(10);
  });
  test("debe devolver 0 si no se pasa argumento a getGifs", async () => {
    const data = await getGifs("");
    expect(data.length).toBe(0);
  });
});
