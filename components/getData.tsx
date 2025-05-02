import { supabase } from "@/utils/supabase/supabase"
import Task from "./task"
import { Dispatch, SetStateAction, ReactElement } from "react"

/**
 * Supabaseから'tasks'テーブルの全レコードを取得し、各タスクをReact要素のリストとして状態を更新します。
 *
 * @param taskList - タスク一覧のReact要素配列を更新するためのReactのステートセッター関数。
 *
 * @remark データ取得時にエラーが発生した場合や例外が投げられた場合は、エラー内容がコンソールに出力されます。
 */
export default async function getData(
  taskList: Dispatch<SetStateAction<Array<ReactElement>>>
) {
  const tmpTaskList = []
  try {
    let { data: tasks, error } = await supabase
      .from('tasks')
      .select('*')
    if (error) {
      console.log(error)
    }

    if (tasks != null) {
      for (let index = 0; index < tasks.length; index++) {
        tmpTaskList.push(
          <li className="flex items-center justify-between py-2" key={tasks[index]["id"]}>
            <Task
              taskList={taskList}
              id={tasks[index]["id"]}
              name={tasks[index]["name"] ?? ""}
              updated_at={tasks[index]["updated_at"] ?? ""}
            >
            </Task>
          </li>
        )
      }
      taskList(tmpTaskList)
    }
  } catch (error) {
    console.log(error);
  }
}