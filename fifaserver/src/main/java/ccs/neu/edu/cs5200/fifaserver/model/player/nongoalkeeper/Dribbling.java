package ccs.neu.edu.cs5200.fifaserver.model.player.nongoalkeeper;

public class Dribbling {
  private int dribblingId;
  private int agility;
  private int balance;
  private int reactions;
  private int ballControl;
  private int dribbling;
  private int composure;
  private int overall;
  private int nonGkStatId;

  public Dribbling(int dribblingId, int agility, int balance, int reactions, int ballControl,
                   int dribbling, int composure, int overall, int nonGkStatId) {
    this.dribblingId = dribblingId;
    this.agility = agility;
    this.balance = balance;
    this.reactions = reactions;
    this.ballControl = ballControl;
    this.dribbling = dribbling;
    this.composure = composure;
    this.overall = overall;
    this.nonGkStatId = nonGkStatId;
  }

  public int getDribblingId() {
    return dribblingId;
  }

  public void setDribblingId(int dribblingId) {
    this.dribblingId = dribblingId;
  }

  public int getAgility() {
    return agility;
  }

  public void setAgility(int agility) {
    this.agility = agility;
  }

  public int getBalance() {
    return balance;
  }

  public void setBalance(int balance) {
    this.balance = balance;
  }

  public int getReactions() {
    return reactions;
  }

  public void setReactions(int reactions) {
    this.reactions = reactions;
  }

  public int getBallControl() {
    return ballControl;
  }

  public void setBallControl(int ballControl) {
    this.ballControl = ballControl;
  }

  public int getDribbling() {
    return dribbling;
  }

  public void setDribbling(int dribbling) {
    this.dribbling = dribbling;
  }

  public int getComposure() {
    return composure;
  }

  public void setComposure(int composure) {
    this.composure = composure;
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
