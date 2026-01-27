import CurriculumOverviewComman from "../common/CurriculumOverviewComman";
import { grade6Subjects } from "../../constants/grade6Data";
import { grade7Subjects } from "../../constants/grade7Data";
import { grade8Subjects } from "../../constants/grade8Data";

const gradesData6to8 = {
  "Grade 6": grade6Subjects,
  "Grade 7": grade7Subjects,
  "Grade 8": grade8Subjects,
};

const tags6to8 = ["All", "Grade 6", "Grade 7", "Grade 8"];

export default function Grades6to8() {
  return (
    <CurriculumOverviewComman tags={tags6to8} gradesData={gradesData6to8} />
  );
}
