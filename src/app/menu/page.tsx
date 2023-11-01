import { insertValue } from "@/server";

export default function Menu() {
  return (
    <div>
      <form action={insertValue}>
        <div>
          <label htmlFor="name">Tên menu</label>
          <div>
            <input type="text" name="name" />
          </div>
        </div>
        <div>
          <label htmlFor="path">Path</label>
          <div>
            <input type="text" name="path" />
          </div>
        </div>
        <div>
          <label htmlFor="parentId">Menu cha</label>
          <div>
            <select name="parentId"></select>
          </div>
        </div>
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}
