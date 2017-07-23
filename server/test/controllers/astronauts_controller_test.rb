require 'test_helper'

class AstronautsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @astronaut = astronauts(:one)
  end

  test "should get index" do
    get astronauts_url, as: :json
    assert_response :success
  end

  test "should create astronaut" do
    assert_difference('Astronaut.count') do
      post astronauts_url, params: { astronaut: { birthdate: @astronaut.birthdate, firstname: @astronaut.firstname, lastname: @astronaut.lastname, superpower: @astronaut.superpower } }, as: :json
    end

    assert_response 201
  end

  test "should show astronaut" do
    get astronaut_url(@astronaut), as: :json
    assert_response :success
  end

  test "should update astronaut" do
    patch astronaut_url(@astronaut), params: { astronaut: { birthdate: @astronaut.birthdate, firstname: @astronaut.firstname, lastname: @astronaut.lastname, superpower: @astronaut.superpower } }, as: :json
    assert_response 200
  end

  test "should destroy astronaut" do
    assert_difference('Astronaut.count', -1) do
      delete astronaut_url(@astronaut), as: :json
    end

    assert_response 204
  end
end
