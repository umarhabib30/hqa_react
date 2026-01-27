import React from "react";
import CurriculumOverviewMbl from "../../components/common/CurriculumOverviewMblComman";
import { grade1Subjects } from "../../constants/grade1Data";
import { grade2Subjects } from "../../constants/grade2Data";
import { grade3Subjects } from "../../constants/grade3Data";
import { grade4Subjects } from "../../constants/grade4Data";
import { grade5Subjects } from "../../constants/grade5Data";
import { kindergartenSubjects } from "../../constants/kindergartenData";
import CurriculumOverviewComman from "../common/CurriculumOverviewComman";

const gradesData1to5 = {
  "Kinder Garden": kindergartenSubjects,
  "Grade 1": grade1Subjects,
  "Grade 2": grade2Subjects,
  "Grade 3": grade3Subjects,
  "Grade 4": grade4Subjects,
  "Grade 5": grade5Subjects,
};

const tags1to5 = [
  "All",
  "Kinder Garden",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
];

export default function Grade1to5Mbl() {
  return (
    <CurriculumOverviewComman
      tags={tags1to5}
      gradesData={gradesData1to5}
      filters={["All", "Mathematics", "Quran", "Science", "English"]}
    />
  );
}
