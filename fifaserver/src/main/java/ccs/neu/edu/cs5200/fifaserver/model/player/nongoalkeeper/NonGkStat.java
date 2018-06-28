package ccs.neu.edu.cs5200.fifaserver.model.player.nongoalkeeper;

public class NonGkStat {
  private int statId;
  private int paceId;
  private int dribblingId;
  private int shootingId;
  private int defendingId;
  private int physicalityId;
  private int passingId;
  private int positionScoreId;

  public NonGkStat(int statId, int paceId, int dribblingId, int shootingId, int defendingId,
                   int physicalityId, int passingId, int positionScoreId) {
    this.statId = statId;
    this.paceId = paceId;
    this.dribblingId = dribblingId;
    this.shootingId = shootingId;
    this.defendingId = defendingId;
    this.physicalityId = physicalityId;
    this.passingId = passingId;
    this.positionScoreId = positionScoreId;
  }

  public int getStatId() {
    return statId;
  }

  public void setStatId(int statId) {
    this.statId = statId;
  }

  public int getPaceId() {
    return paceId;
  }

  public void setPaceId(int paceId) {
    this.paceId = paceId;
  }

  public int getDribblingId() {
    return dribblingId;
  }

  public void setDribblingId(int dribblingId) {
    this.dribblingId = dribblingId;
  }

  public int getShootingId() {
    return shootingId;
  }

  public void setShootingId(int shootingId) {
    this.shootingId = shootingId;
  }

  public int getDefendingId() {
    return defendingId;
  }

  public void setDefendingId(int defendingId) {
    this.defendingId = defendingId;
  }

  public int getPhysicalityId() {
    return physicalityId;
  }

  public void setPhysicalityId(int physicalityId) {
    this.physicalityId = physicalityId;
  }

  public int getPassingId() {
    return passingId;
  }

  public void setPassingId(int passingId) {
    this.passingId = passingId;
  }

  public int getPositionScoreId() {
    return positionScoreId;
  }

  public void setPositionScoreId(int positionScoreId) {
    this.positionScoreId = positionScoreId;
  }
}
