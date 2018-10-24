import { ScrumMaster } from "./scrum-master";

export const MOCK_SM_SKILLS: ScrumMaster[] = [
    {
        name: "Mike Hartung",
        skills: {
            "Backlog Grooming": {
                "score": 2,
                "goal": 3,
                "focus": false
            },
            "Sprint Planning": {
                "score": 3,
                "goal": 3,
                "focus": false
            },
            "Retrospective": {
                "score": 4,
                "goal": 4,
                "focus": false
            },
            "Sprint Review": {
                "score": 1,
                "goal": 4,
                "focus": true
            },
            "Daily Standups": {
                "score": 2,
                "goal": 3,
                "focus": false
            },
            "Quarterly Planning": {
                "score": 2,
                "goal": 3,
                "focus": false
            },
            "Agile Time Reporting": {
                "score": 2,
                "goal": 3,
                "focus": true
            }
        }
    },
    {
        name: "Erin Cunningham",
        skills: {
            "Backlog Grooming": {
                "score": 2,
                "goal": 1,
                "focus": true
            },
            "Sprint Planning": {
                "score": 3,
                "goal": 4,
                "focus": false
            },
            "Retrospective": {
                "score": 4,
                "goal": 4,
                "focus": false
            },
            "Sprint Review": {
                "score": 3,
                "goal": 2,
                "focus": false
            },
            "Daily Standups": {
                "score": 2,
                "goal": 3,
                "focus": false
            },
            "Quarterly Planning": {
                "score": 2,
                "goal": 1,
                "focus": false
            },
            "Agile Time Reporting": {
                "score": 2,
                "goal": 3,
                "focus": false
            }
        }
    }
]