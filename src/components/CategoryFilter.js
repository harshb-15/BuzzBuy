
function CategoryFilter({name, categories, onSelectCategroy = f=>f})
{
    return (
        <>
            <div class="mb-2">
                <aside class="menu">
                    <p class="menu-label has-text-weight-bold">{name}</p>
                    <ul class="menu-list">
                        {Object.keys(categories).map((value, i) => (
                            <li key={i}>
                                <label class="checkbox">
                                    <input type="checkbox" onChange={(e)=>onSelectCategroy(value, e.currentTarget.checked)}></input> {value}
                                </label>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </>
    );
}
export default CategoryFilter;