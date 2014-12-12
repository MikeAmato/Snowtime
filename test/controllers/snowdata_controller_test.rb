require 'test_helper'

class SnowdataControllerTest < ActionController::TestCase
  setup do
    @snowdatum = snowdata(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:snowdata)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create snowdatum" do
    assert_difference('Snowdatum.count') do
      post :create, snowdatum: { date: @snowdatum.date, location: @snowdatum.location, snowdepth: @snowdatum.snowdepth, snowfall: @snowdatum.snowfall, zipcode: @snowdatum.zipcode }
    end

    assert_redirected_to snowdatum_path(assigns(:snowdatum))
  end

  test "should show snowdatum" do
    get :show, id: @snowdatum
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @snowdatum
    assert_response :success
  end

  test "should update snowdatum" do
    patch :update, id: @snowdatum, snowdatum: { date: @snowdatum.date, location: @snowdatum.location, snowdepth: @snowdatum.snowdepth, snowfall: @snowdatum.snowfall, zipcode: @snowdatum.zipcode }
    assert_redirected_to snowdatum_path(assigns(:snowdatum))
  end

  test "should destroy snowdatum" do
    assert_difference('Snowdatum.count', -1) do
      delete :destroy, id: @snowdatum
    end

    assert_redirected_to snowdata_path
  end
end
