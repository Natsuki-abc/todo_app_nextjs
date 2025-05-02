import TaskTable from "@/components/taskTable";

/**
 * タスクテーブルを中央に表示するページコンポーネントです。
 *
 * @returns タスクテーブルを含むレイアウト済みのJSX要素。
 */
export default async function Index() {

  return (
    <div className="flex-1 flex flex-col gap-20 items-center pt-24">
      <TaskTable></TaskTable>
    </div>
  )
}