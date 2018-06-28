package ccs.neu.edu.cs5200.fifaserver.model.squad;

public class Squad {
  private int squadId;
  private int formationId;
  private int playerId1;
  private int playerId2;
  private int playerId3;
  private int playerId4;
  private int playerId5;
  private int playerId6;
  private int playerId7;
  private int playerId8;
  private int playerId9;
  private int playerId10;
  private int playerId11;
  private int Chemistry;

  public Squad(int squadId, int formationId, int playerId1, int playerId2, int playerId3,
               int playerId4, int playerId5, int playerId6, int playerId7, int playerId8,
               int playerId9, int playerId10, int playerId11, int chemistry) {
    this.squadId = squadId;
    this.formationId = formationId;
    this.playerId1 = playerId1;
    this.playerId2 = playerId2;
    this.playerId3 = playerId3;
    this.playerId4 = playerId4;
    this.playerId5 = playerId5;
    this.playerId6 = playerId6;
    this.playerId7 = playerId7;
    this.playerId8 = playerId8;
    this.playerId9 = playerId9;
    this.playerId10 = playerId10;
    this.playerId11 = playerId11;
    Chemistry = chemistry;
  }

  public int getSquadId() {
    return squadId;
  }

  public void setSquadId(int squadId) {
    this.squadId = squadId;
  }

  public int getFormationId() {
    return formationId;
  }

  public void setFormationId(int formationId) {
    this.formationId = formationId;
  }

  public int getPlayerId1() {
    return playerId1;
  }

  public void setPlayerId1(int playerId1) {
    this.playerId1 = playerId1;
  }

  public int getPlayerId2() {
    return playerId2;
  }

  public void setPlayerId2(int playerId2) {
    this.playerId2 = playerId2;
  }

  public int getPlayerId3() {
    return playerId3;
  }

  public void setPlayerId3(int playerId3) {
    this.playerId3 = playerId3;
  }

  public int getPlayerId4() {
    return playerId4;
  }

  public void setPlayerId4(int playerId4) {
    this.playerId4 = playerId4;
  }

  public int getPlayerId5() {
    return playerId5;
  }

  public void setPlayerId5(int playerId5) {
    this.playerId5 = playerId5;
  }

  public int getPlayerId6() {
    return playerId6;
  }

  public void setPlayerId6(int playerId6) {
    this.playerId6 = playerId6;
  }

  public int getPlayerId7() {
    return playerId7;
  }

  public void setPlayerId7(int playerId7) {
    this.playerId7 = playerId7;
  }

  public int getPlayerId8() {
    return playerId8;
  }

  public void setPlayerId8(int playerId8) {
    this.playerId8 = playerId8;
  }

  public int getPlayerId9() {
    return playerId9;
  }

  public void setPlayerId9(int playerId9) {
    this.playerId9 = playerId9;
  }

  public int getPlayerId10() {
    return playerId10;
  }

  public void setPlayerId10(int playerId10) {
    this.playerId10 = playerId10;
  }

  public int getPlayerId11() {
    return playerId11;
  }

  public void setPlayerId11(int playerId11) {
    this.playerId11 = playerId11;
  }

  public int getChemistry() {
    return Chemistry;
  }

  public void setChemistry(int chemistry) {
    Chemistry = chemistry;
  }
}
