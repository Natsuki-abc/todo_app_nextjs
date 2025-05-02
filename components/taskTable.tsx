"use client"
import AddTask from "./addTasks"
import { ReactElement, useState, useEffect } from "react"
import getData from "./getData"

/**
 * タスク一覧を表示し、新規タスクの追加機能を提供するReactコンポーネントです。
 *
 * 初回マウント時にタスクデータを取得し、リストとして表示します。タスクの追加は{@link AddTask}コンポーネント経由で行われ、追加後はリストが自動的に更新されます。
 */
export default function TaskTable() {
  const [taskList, setTaskList] = useState<Array<ReactElement>>([])

  // 初回のみ実行したいので、第二引数が空のuseEffectでデータ取得
  useEffect(() => {
    getData(setTaskList)
  }, [])

  return (
    <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Todoリスト</h1>
        <AddTask taskList={setTaskList}></AddTask>
        <ul className="mt-4 divide-y divide-gray-200">
          {taskList}
        </ul>
      </div>
    </div>
  )
}