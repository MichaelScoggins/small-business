import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import { faBong } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
// import RecordReview from "../containers/forms/RecordReview";

export default function ViewPreTokeModal(props) {
  const [open, toggleOpen] = React.useState(true);

  const preLog = props.experiences.preLogs.find(
    (pre) => pre.strain.id == props.sID
  );

  const handleClose = () => {
    toggleOpen(false);
    props.setViewPreTokeModal(false);
  };

  return (
    <Fragment>
      <Typography>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <Typography variant="h5">
              Before You Tried{" "}
              {
                <span style={{ color: "springgreen" }}>
                  {preLog.strain.name}
                </span>
              }
            </Typography>
          </DialogTitle>
          <DialogContent>
            While I'm feeling{" "}
            <span style={{ color: "orange" }}>{preLog.mood}</span>, I'm hoping
            to achieve <span style={{ color: "orange" }}>{preLog.reason}</span>,
            and expecting{" "}
            <span style={{ color: "orange" }}>{preLog.expectations}</span>. I'm
            thinking about{" "}
            <span style={{ color: "orange" }}>{preLog.worries}</span>, but{" "}
            <span style={{ color: "orange" }}>{preLog.goals}</span>. I have
            already{" "}
            <span style={{ color: "orange" }}>
              {preLog.alreadyAccomplished}
            </span>
            , and still need to{" "}
            <span style={{ color: "orange" }}>{preLog.planToAccomplish}</span>.
          </DialogContent>
        </Dialog>
      </Typography>
    </Fragment>
  );
}