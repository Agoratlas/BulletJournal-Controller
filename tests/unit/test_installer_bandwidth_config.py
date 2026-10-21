from __future__ import annotations

import json

import pytest

from bulletjournal_controller.config import default_instance_config, instance_config_from_dict, instance_config_json
from bulletjournal_controller.domain.errors import ConfigurationError


def test_installer_bandwidth_defaults_to_unlimited() -> None:
    data = json.loads(instance_config_json(default_instance_config()))
    data.pop('installer_device_write_bps', None)
    assert instance_config_from_dict(data).installer_device_write_bps == {}


def test_installer_bandwidth_round_trip() -> None:
    data = json.loads(instance_config_json(default_instance_config()))
    data['installer_device_write_bps'] = {'/dev/sda': 10485760}
    config = instance_config_from_dict(data)
    assert json.loads(instance_config_json(config))['installer_device_write_bps'] == {'/dev/sda': 10485760}


@pytest.mark.parametrize(
    'value',
    [
        None,
        [],
        10,
        {'sda': 10},
        {'/dev/sda': 0},
        {'/dev/sda': -1},
        {'/dev/sda': True},
        {'/dev/sda': 1.5},
        {'/dev/sda': '10'},
    ],
)
def test_installer_bandwidth_rejects_invalid_limits(value: object) -> None:
    data = json.loads(instance_config_json(default_instance_config()))
    data['installer_device_write_bps'] = value
    with pytest.raises(ConfigurationError, match='installer_device_write_bps'):
        instance_config_from_dict(data)
