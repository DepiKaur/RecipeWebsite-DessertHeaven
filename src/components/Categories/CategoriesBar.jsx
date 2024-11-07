import './CategoriesBar.css';
import AvailableCategories from './AvailableCategories';

function CategoriesBar(props) {
  return (
    <nav className='nav'>
      <hr />
      <AvailableCategories
        availableCategories={props.categories}
        categoryHandler={props.onCategorySelection}
      />
      <hr />
    </nav>
  );
}

export default CategoriesBar;