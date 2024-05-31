import {IconPencil, IconTrash} from "@tabler/icons-react";

export const MovieItem = (props) => {
  return (
    <tr className="h-12">
      <td className="px-4 border border-neutral-200">{props.title}</td>
      <td className="px-4 border border-neutral-200">{props.genre}</td>
      <td className="px-4 border border-neutral-200">
        {new Date(props.time).toLocaleString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        })}
      </td>
      <td
        className="px-4 border border-neutral-200">
        <div className="flex justify-between w-full">
          <IconPencil onClick={props.onShowMovie}
                      className="cursor-pointer" />
          
          <IconTrash onClick={props.onDestroyMovie}
                     className="cursor-pointer" />
        </div>
      </td>
    </tr>
  );
}
