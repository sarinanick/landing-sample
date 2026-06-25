import { Button } from "../Button";
import { Tooltip } from "./Tooltip";

export function TooltipDemo() {
  return (
    <section dir="rtl" style={{ display: "grid", gap: 24 }}>
      <h2>Tooltip</h2>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <Tooltip content="جستجو" placement="top">
          <button aria-label="جستجو" style={{ width: 48, height: 48, borderRadius: 24, border: 0 }}>
            🔎
          </button>
        </Tooltip>

        <Tooltip content="حذف آیتم" placement="bottom">
          <button aria-label="حذف" style={{ width: 48, height: 48, borderRadius: 24, border: 0 }}>
            🗑
          </button>
        </Tooltip>

        <Tooltip content="نمایش اطلاعات بیشتر" placement="start">
          <Button variant="outlined">راهنما</Button>
        </Tooltip>

        <Tooltip
          variant="rich"
          title="ذخیره تغییرات"
          content="با این کار اطلاعات فرم ذخیره می‌شود و بعداً قابل ویرایش است."
          action={<Button variant="text">بیشتر بدانید</Button>}
          placement="bottom"
        >
          <Button variant="filled">ذخیره</Button>
        </Tooltip>
      </div>
    </section>
  );
}
