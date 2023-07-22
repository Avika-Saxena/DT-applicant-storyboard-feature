const jsonFileUrl = 'jsonfile.json';

fetch(jsonFileUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        for (a in data) {
            if (a === "drop") {
                var drop_array = [];
                for (var i = 0; i < data[a].length; i++) {
                    drop_array[i] = document.getElementById("drop-" + i);
                    drop_array[i].innerHTML = data[a][i];
                }
            } else if (a === "heading") {
                document.querySelector("#title h1").innerHTML = "Applicant's Story-Board";
            } else if (a === "apply-button") {
                for (var i = 0; i < data[a].length; i++) {
                    document.getElementById("applybutton" + (i + 1)).innerHTML = data[a][i];
                }
            } else if (a === "view-details") {
                for (var i = 0; i < data[a].length; i++) {
                    document.getElementById("view" + (i + 1)).innerHTML = data[a][i];
                }
            } else if (a === "labels") {
                for (var i = 1; i < data[a].length; i++) {
                    document.querySelector("#label-" + i).innerHTML = data[a][i - 1];
                }
            } else if (a === "add-filter") {
                document.querySelector("#head").innerHTML = data[a];
            } else if (a === "select-option") {
                for (b in data[a]) {
                    if (b === "select1") {
                        for (c in data[a][b]) {
                            if (c === "optgroup-1") {
                                for (var i = 0; i < data[a][b][c].length; i++) {
                                    document.querySelector("#optgroup-1-option-" + (i + 1)).innerHTML = data[a][b][c][i];
                                }
                            } else if (c === "optgroup-2") {
                                for (var i = 0; i < data[a][b][c].length; i++) {
                                    document.querySelector("#optgroup-2-option-" + (i + 1)).innerHTML = data[a][b][c][i];
                                }
                            } else if (c === "optgroup-3") {
                                for (var i = 0; i < data[a][b][c].length; i++) {
                                    document.querySelector("#optgroup-3-option-" + (i + 1)).innerHTML = data[a][b][c][i];
                                }
                            } else if (c === "optgroup-4") {
                                for (var i = 0; i < data[a][b][c].length; i++) {
                                    document.querySelector("#optgroup-4-option-" + (i + 1)).innerHTML = data[a][b][c][i];
                                }
                            }
                        }
                    } else if (b === "select2") {
                        for (var i = 0; i < data[a][b].length; i++) {
                            document.querySelector("#label-3-option-" + (i + 1)).innerHTML = data[a][b][i];
                        }
                    } else if (b === "select3") {
                        for (var i = 0; i < data[a][b].length; i++) {
                            document.querySelector("#label-4-option-" + (i + 1)).innerHTML = data[a][b][i];
                        }
                    } else if (b === "select4") {
                        for (var i = 0; i < data[a][b].length; i++) {
                            document.querySelector("#label-5-option-" + (i + 1)).innerHTML = data[a][b][i];
                        }
                    } else if (b === "select5") {
                        for (var i = 0; i < data[a][b].length; i++) {
                            document.querySelector("#label-6-option-" + (i + 1)).innerHTML = data[a][b][i];
                        }
                    }
                }

            } else if (a === "select-form") {
                for (e in data[a]) {
                    for (d in data[a][e]) {
                        if (d === "optgroup-1") {
                            for (var i = 0; i < data[a][e][d].length; i++) {
                                document.querySelector("#mainbox1-optgroup-1-option-" + (i + 1)).innerHTML = data[a][e][d][i];
                            }
                        } else if (d === "optgroup-2") {
                            for (var i = 0; i < data[a][e][d].length; i++) {
                                document.querySelector("#mainbox1-optgroup-2-option-" + (i + 1)).innerHTML = data[a][e][d][i];
                            }
                        } else if (d === "optgroup-3") {
                            for (var i = 0; i < data[a][e][d].length; i++) {
                                document.querySelector("#mainbox1-optgroup-3-option-" + (i + 1)).innerHTML = data[a][e][d][i];
                            }
                        } else if (d === "optgroup-4") {
                            for (var i = 0; i < data[a][e][d].length; i++) {
                                document.querySelector("#mainbox1-optgroup-4-option-" + (i + 1)).innerHTML = data[a][e][d][i];
                            }
                        } else if (d === "optgroup-5") {
                            for (var i = 0; i < data[a][e][d].length; i++) {
                                document.querySelector("#mainbox1-optgroup-5-option-" + (i + 1)).innerHTML = data[a][e][d][i];
                            }
                        } else if (d === "optgroup-6") {
                            for (var i = 0; i < data[a][e][d].length; i++) {
                                document.querySelector("#mainbox1-optgroup-6-option-" + (i + 1)).innerHTML = data[a][e][d][i];
                            }
                        }
                    }
                }
            } else if (a === "carousel") {
                for (var i = 0; i < data[a].length; i++) {
                    for (j in data[a][i]) {
                        switch (j) {
                            case "heading":
                                document.querySelector("#slide-" + (i + 1) + " .mainbox2-in-1 h2").innerHTML = data[a][i][j];
                                break;
                            case "Post_date":
                                document.querySelector("#slide-" + (i + 1) + " #slide-" + (i + 1) + "-job-in-1 h4").innerHTML = " Posted on " + data[a][i][j];
                                break;
                            case "active":
                                if (data[a][i][j] == "Actively Hiring") {
                                    document.querySelector("#slide-" + (i + 1) + " #slide-" + (i + 1) + "-job-in-2 h4").style.color = "green";
                                    document.querySelector("#slide-" + (i + 1) + " #slide-" + (i + 1) + "-job-in-2 h4").innerHTML = data[a][i][j];
                                } else {
                                    document.querySelector("#slide-" + (i + 1) + " #slide-" + (i + 1) + "-job-in-2 h4").style.color = "Red";
                                    document.querySelector("#slide-" + (i + 1) + " #slide-" + (i + 1) + "-job-in-2 h4").innerHTML = data[a][i][j];
                                }
                                break;
                            case "Location":
                                document.querySelector("#slide-" + (i + 1) + " .loc-in h4").innerHTML = " Location: " + data[a][i][j];
                                break;
                            case "Applied":
                                document.querySelector("#slide-" + (i + 1) + " #job-app h4").innerHTML = data[a][i][j] + " are already applied";
                                break;
                            case "start_date":
                                document.querySelector("#slide-" + (i + 1) + " #sta .ico-con .sta-dur-sti-in h4").innerHTML = " Start Date" + "<br>" + data[a][i][j];
                                break;
                            case "Duration":
                                document.querySelector("#slide-" + (i + 1) + " #dur .sta-dur-sti-in h4").innerHTML = " Duration" + "<br>" + data[a][i][j];
                                break;
                            case "salary":
                                document.querySelector("#slide-" + (i + 1) + " #sti .sta-dur-sti-in h4").innerHTML = " Stipend" + "<br>" + data[a][i][j];
                                break;
                        }
                    }
                }
            } else if (a == "courses") {
                document.querySelector("#course-available").innerHTML = data[a];
            } else if (a == "choose-course") {
                document.querySelector("#choose-your-course").innerHTML = data[a];
            } else if (a === "ask-doubt") {
                document.querySelector("#ask-doubts").innerHTML = data[a];
            } else if (a === "user") {
                for (var i = 0; i < data[a].length; i++) {
                    document.querySelector("#user-" + (i + 1)).innerHTML = data[a][i];
                }
            } else if (a === "admin") {
                for (var i = 0; i < data[a].length; i++) {
                    document.querySelector("#admin-" + (i + 1)).innerHTML = data[a][i];
                }
            } else if (a === "ques_select_course") {
                for (obj in data[a]) {
                    if (obj === "select1") {
                        for (var i = 0; i < data[a][obj].length; i++) {
                            document.getElementById("ques-select-1-option-" + (i + 1)).innerHTML = data[a][obj][i];
                        }
                    } else if (obj === "select2") {
                        for (var i = 0; i < data[a][obj].length; i++) {
                            document.getElementById("ques-select-2-option-" + (i + 1)).innerHTML = data[a][obj][i];
                        }
                    }
                    if (obj === "select3") {
                        for (var i = 0; i < data[a][obj].length; i++) {
                            document.getElementById("ques-select-3-option-" + (i + 1)).innerHTML = data[a][obj][i];
                        }
                    }
                    if (obj === "select4") {
                        for (var i = 0; i < data[a][obj].length; i++) {
                            document.getElementById("ques-select-4-option-" + (i + 1)).innerHTML = data[a][obj][i];
                        }
                    }
                }
            }
        }
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });