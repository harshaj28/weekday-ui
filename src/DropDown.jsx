import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

const useStyles = makeStyles(() => ({
  formControl: {
    "& .MuiInputBase-root": {
      color: "grey",
    //   borderColor: "grey",
    //   borderWidth: "1px",
    //   borderStyle: "solid",
    border: "grey 0.5px solid",
      borderRadius: "5px",
      minWidth: "120px",
      justifyContent: "space-around"
    },
    "& .MuiSelect-select.MuiSelect-select": {
      paddingRight: "0px"
    }
  },
  select: {
    width: "auto",
    fontSize: "12px",
    "&:focus": {
      backgroundColor: "transparent"
    }
  },
  selectIcon: {
    position: "relative",
    color: "grey",
    fontSize: "25px"
  },
  paper: {
    borderRadius: 12,
    marginTop: 8
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    "& li": {
      fontWeight: 200,
      paddingTop: 8,
      paddingBottom: 8,
      fontSize: "12px"
    },
    "& li.Mui-selected": {
      color: "white",
      background: "grey"
    },
    "& li.Mui-selected:hover": {
      background: "grey"
    }
  }
}));

const DropDown = ({ value, handleChange, items }) => {
  const classes = useStyles();

  const menuProps = {
    classes: {
      list: classes.list,
      paper: classes.paper
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    getContentAnchorEl: null
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={value}
        // label="Roles"
        onChange={handleChange}
        disableUnderline
        IconComponent={ExpandMoreRoundedIcon}
        MenuProps={menuProps}
        classes={{
          select: classes.select,
          icon: classes.selectIcon
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.key} value={item.value}>
            {item.key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
