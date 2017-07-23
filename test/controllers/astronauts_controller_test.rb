require 'test_helper'

class AstronautsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @astronaut = astronauts(:one)
  end

  test "should get index" do
    get astronauts_url
    assert_response :success
  end

  test "should get new" do
    get new_astronaut_url
    assert_response :success
  end

  test "should create astronaut" do
    assert_difference('Astronaut.count') do
      post astronauts_url, params: { astronaut: { birthdate: @astronaut.birthdate, firstname: @astronaut.firstname, lastname: @astronaut.lastname, superpower: @astronaut.superpower } }
    end

    assert_redirected_to astronaut_url(Astronaut.last)
  end

  test "should show astronaut" do
    get astronaut_url(@astronaut)
    assert_response :success
  end

  test "should get edit" do
    get edit_astronaut_url(@astronaut)
    assert_response :success
  end

  test "should update astronaut" do
    patch astronaut_url(@astronaut), params: { astronaut: { birthdate: @astronaut.birthdate, firstname: @astronaut.firstname, lastname: @astronaut.lastname, superpower: @astronaut.superpower } }
    assert_redirected_to astronaut_url(@astronaut)
  end

  test "should destroy astronaut" do
    assert_difference('Astronaut.count', -1) do
      delete astronaut_url(@astronaut)
    end

    assert_redirected_to astronauts_url
  end
end
