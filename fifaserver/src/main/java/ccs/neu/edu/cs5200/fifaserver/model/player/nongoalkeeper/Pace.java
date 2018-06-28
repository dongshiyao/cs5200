package ccs.neu.edu.cs5200.fifaserver.model.player.nongoalkeeper;

public class Pace {
  private int paceId;
  private int acceleration;
  private int sprintSpeed;
  private int overall;
  private int nonGkStatId;

  public Pace(int paceId, int acceleration, int sprintSpeed, int overall, int nonGkStatId) {
    this.paceId = paceId;
    this.acceleration = acceleration;
    this.sprintSpeed = sprintSpeed;
    this.overall = overall;
    this.nonGkStatId = nonGkStatId;
  }

  public int getPaceId() {
    return paceId;
  }

  public void setPaceId(int paceId) {
    this.paceId = paceId;
  }

  public int getAcceleration() {
    return acceleration;
  }

  public void setAcceleration(int acceleration) {
    this.acceleration = acceleration;
  }

  public int getSprintSpeed() {
    return sprintSpeed;
  }

  public void setSprintSpeed(int sprintSpeed) {
    this.sprintSpeed = sprintSpeed;
  }

  public int getOverall() {
    return overall;
  }

  public void setOverall(int overall) {
    this.overall = overall;
  }

  public int getNonGkStatId() {
    return nonGkStatId;
  }

  public void setNonGkStatId(int nonGkStatId) {
    this.nonGkStatId = nonGkStatId;
  }
}
