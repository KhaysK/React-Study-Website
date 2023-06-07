import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

function PostFilter({ filter, setFilter }) {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) =>
                    setFilter({ ...filter, query: e.target.value })
                }
                placeholder="Поиск..."
            />
            <MySelect
                defaultValue='Sort'
                value={filter.sort}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" },
                ]}
            />
        </div>
    );
}

export default PostFilter;
