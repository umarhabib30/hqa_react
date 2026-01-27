import { grade9Subjects } from "../../constants/Grade9Data";
import { grade10Subjects } from "../../constants/Grade10Data";
import { grade11Subjects } from "../../constants/grade11Data";
import { grade12Subjects } from "../../constants/grade12Data";
import CurriculumOverviewMbl from "../common/CurriculumOverviewMblComman";

const gradesData9to12 = {
  "Grade 9": grade9Subjects,
  "Grade 10": grade10Subjects,
  "Grade 11": grade11Subjects,
  "Grade 12": grade12Subjects,
};

const tags9to12 = ["All", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

export default function Grades9to12Mbl() {
  return (
    <CurriculumOverviewMbl tags={tags9to12} gradesData={gradesData9to12} />
  );
}
