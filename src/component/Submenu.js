import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Submenu = ({ itemList, title }) => {
  const items = itemList.map((i) => (
    <li key={i.title}>
      <Typography>
        <a href={i.link}>{i.title}</a>
      </Typography>
    </li>
  ));

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul>{items}</ul>
      </AccordionDetails>
    </Accordion>
  );
};

Submenu.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Submenu;
