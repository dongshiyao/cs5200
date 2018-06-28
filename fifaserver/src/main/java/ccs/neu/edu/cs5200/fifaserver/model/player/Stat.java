package ccs.neu.edu.cs5200.fifaserver.model.player;

public class Stat {
  private int statId;
  private int overall;
  private int playerId;

  public Stat(int statId, int overall, int playerId) {
    this.statId = statId;
    this.overall = overall;
    this.playerId = playerId;
  }

  public int getStatId() {
    return statId;
  }

  public void setStatId(int statId) {
    this.statId = statId;
  }

  public int getOverall() {
    return overall;
  }

  public void setOverall(int overall) {
    this.overall = overall;
  }

  public int getPlayerId() {
    return playerId;
  }

  public void setPlayerId(int playerId) {
    this.playerId = playerId;
  }
}
