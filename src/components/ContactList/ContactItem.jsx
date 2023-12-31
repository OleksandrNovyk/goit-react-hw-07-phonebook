// import PropTypes from 'prop-types';
import { MdPersonRemoveAlt1 } from 'react-icons/md';
import { ListItem, ListItemData } from './ContactItem.styled';
import { Btn } from '../Btn/Btn';

export const ContactItem = ({ id, name, phone, onDeleteBtnClick }) => {
  return (
    <ListItem>
      <ListItemData>
        {name}: {phone}
      </ListItemData>
      <Btn
        icon={MdPersonRemoveAlt1}
        type="button"
        status="delete"
        text="Delete contact"
        onClick={() => onDeleteBtnClick(id, name)}
      />
    </ListItem>
  );
};

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   onDeleteBtnClick: PropTypes.func.isRequired,
// };
